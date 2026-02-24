# Git Flow Guidelines

This project follows the Git Flow branching model.

## Branch Structure

- **main**: Production-ready code. Only receives merges from release and hotfix branches.
- **develop**: Integration branch for features. This is the base for feature branches.
- **feature/\***: Feature branches. Created from `develop` and merged back to `develop`.
- **release/\***: Release branches. Created from `develop` and merged to both `main` and `develop`.
- **hotfix/\***: Hotfix branches. Created from `main` and merged to both `main` and `develop`.

## Workflow

### Starting a Feature
```bash
git flow feature start feature-name
```

### Finishing a Feature
```bash
git flow feature finish feature-name
```

### Starting a Release
```bash
git flow release start 1.0.0
```

### Finishing a Release
```bash
git flow release finish 1.0.0
```

### Starting a Hotfix
```bash
git flow hotfix start 1.0.1
```

### Finishing a Hotfix
```bash
git flow hotfix finish 1.0.1
```

## Code Quality

Before committing, ensure code quality:

```bash
npm run lint      # Check for linting errors
npm run lint:fix  # Automatically fix linting issues
```

## Commit Message Guidelines

- Use clear, descriptive commit messages
- Start with a verb: "Add", "Fix", "Update", "Remove"
- Example: "Add book removal feature"

## Pull Requests

Always create a pull request and have it reviewed before merging to `main`.
