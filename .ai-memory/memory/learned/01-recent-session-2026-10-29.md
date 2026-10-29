# Recent session — 2026-10-29

This note records what was created and shipped on 2026-10-29. Paths below are relative git paths.

## go-email-reader

- Specifications for warm-up sequences 08 through 13 are in `02-spec/21-app/08-ui-and-warm-up-algorithm-improvements/` through `02-spec/21-app/13-ui-and-warm-up-algorithm-improvements/`.
- Plans are in `.ai-memory/plans/pending/08-ui-and-warm-up-algorithm-improvements.md` through `.ai-memory/plans/pending/13-ui-and-warm-up-algorithm-improvements.md`.
- Sequence 08 is the connector and gate map. Sequence 09 is brakes. Sequence 10 is the send lease and cool-down. Sequence 11 is the shadow compare. Sequence 12 is the pace envelope. Sequence 13 is the shared quiet window.
- The live tick now consults `internal/warmup/gatefeed.go`. A peer can tighten the remaining-send cap and cannot raise it. An absent or stale peer does not stop local warm-up. Local quiet hours hold. A quiet skip does not send. A dry run does not spend the cap. The gate order is health, cadence, connector, theme.
- The reader UI gate map reads `GET /api/warmup/gates`.
- Commit `f3864ee` is on `main` and is pushed. The remote uses SSH.
- Sequences 08 through 13 stay pending as catalogs. Only the gate engine is implemented.
- `user.email` is `local@gitmap`. The name is `gitmap automation`.

## gitmap-v28

- Cursor-like IDE setup landed in `cli/cmdide/ide_setup.go`, `cli/cmdide/setup/`, and `cli/cmdui/ui_server_ide_setup.go`.
- The spec is `02-spec/21-app/352-cursor-like-ide-setup-from-gitmap/`.
- Pushed commits include `3229df9b4`, `864012968`, and `04690b952`.
- `cli/cov` is a coverage profile and was not committed.

## repo-cache

- Commit `f474298` stores heatmap databases, including `.heatmap/06-cursor/go-email-reader/heatmap.db`.
- SQLite `-shm` and `-wal` sidecars were not committed.

## Push denied

These local commits are still unpushed because GitHub denied `alimtvnetwork`:

- `alim.karim.profile` (19 commits)
- `kubernetes-training-v1` (19 commits)
- `common-linux-installer` (1 commit)

## Rules learned

- Do not put a personal access token in a git remote URL. Use SSH.
- Do not commit coverage profiles or SQLite sidecar files.

## Last 30 commits in this repo

```text
65dd7465 chore(version) - bump to v0.2.60
f762a50f feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 06:34 pm)
f38049ba chore(version) - bump to v0.2.59
e457b33c feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 04:26 pm)
97ec3e8f chore(version) - bump to v0.2.58
70d45587 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 03:19 pm)
52e0bd9e chore(version) - bump to v0.2.57
064537fe feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (29-Oct-26 02:56 pm)
54bdb38f chore(version) - bump to v0.2.56
75e6dd27 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts (28-Oct-26 10:21 am)
e922df3c chore(version) - bump to v0.2.55
900c7356 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
a911c785 chore(version) - bump to v0.2.54
d6f6f750 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
0d76daff chore(version): bump to v0.2.53
f446e37a feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
d0f80200 chore(version): bump to v0.2.52
76168545 feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
0fe3812c chore(version): bump to v0.2.51
883d55b7 feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
f4f51304 chore(version): bump to v0.2.50
5d0edd0d feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
2b786197 chore(version): bump to v0.2.49
51d9b3ca feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
f425ff37 chore(version) - bump to v0.2.48
7b975cd4 feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
1e092968 chore(version): bump to v0.2.47
563e97d7 feat(sync): sync canonical prompts, skills, gitmap agent standards, and purge deprecated 46 task manager
1dc77503 chore(version) - bump to v0.2.46
aee40f7f feat(sync) - sync canonical v6 execute suite, gitmap heatmap telemetry, skills, and prompts
```
