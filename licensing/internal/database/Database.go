// Package database provides SQLite connection and migration management.
package database

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"

	"riseup-licensing/pkg/apperror"

	_ "modernc.org/sqlite"
)

// Open creates or opens the SQLite database at the given path.
// It ensures the parent directory exists before opening.
func Open(dbPath string) (*sql.DB, error) {
	dir := filepath.Dir(dbPath)
	mkErr := os.MkdirAll(dir, 0755)

	if mkErr != nil {
		return nil, apperror.Wrap(mkErr, apperror.ErrInternal, "create database directory")
	}

	db, openErr := sql.Open("sqlite", dbPath)
	if openErr != nil {
		return nil, apperror.Wrap(openErr, apperror.ErrInternal, "open database")
	}

	pragmaErr := configurePragmas(db)
	if pragmaErr != nil {
		db.Close()
		return nil, apperror.Wrap(pragmaErr, apperror.ErrInternal, "configure pragmas")
	}

	return db, nil
}

// configurePragmas sets SQLite performance and safety pragmas.
func configurePragmas(db *sql.DB) error {
	pragmas := []string{
		"PRAGMA journal_mode=WAL",
		"PRAGMA busy_timeout=5000",
		"PRAGMA synchronous=NORMAL",
		"PRAGMA foreign_keys=ON",
	}

	for _, pragma := range pragmas {
		_, execErr := db.Exec(pragma)
		if execErr != nil {
			return apperror.Wrap(execErr, apperror.ErrInternal, fmt.Sprintf("exec %q", pragma))
		}
	}

	return nil
}
