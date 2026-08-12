// Package wordpress — typed structs for TestConnection step responses.
package wordpress

// wpRootInfo is the typed struct for parsing the Wordpress Rest Api root response.
type wpRootInfo struct {
	Name        string `json:"name"`        // external key (Wordpress Rest Api)
	Description string `json:"description"` // external key
}

// wpUserInfo is the typed struct for parsing the users/me response.
type wpUserInfo struct {
	Id           int             `json:"id"`           // external key (Wordpress Rest Api)
	Name         string          `json:"name"`         // external key
	Slug         string          `json:"slug"`         // external key
	Roles        []string        `json:"roles"`        // external key
	Capabilities map[string]bool `json:"capabilities"` // external key
}

// wpCreatedPost is the typed struct for parsing a created post response.
type wpCreatedPost struct {
	Id int `json:"id"` // external key (Wordpress Rest Api)
}

// wpTestPost is the typed struct for creating a test draft post.
type wpTestPost struct {
	Title   string `json:"title"`   // external key (Wordpress Rest Api)
	Content string `json:"content"` // external key
	Status  string `json:"status"`  // external key
}
