# Git Workflow Documentation

## Branch Structure

Our repository uses the following branch structure:

- `main` - Default branch, contains stable code
- `develop` - Development branch, where features are integrated
- `production` - Production branch, contains production-ready code
- `feature/*` - Feature branches for new development

## Workflow Guidelines

### Feature Development

1. Create a new feature branch from `develop`:
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

3. Push your feature branch:
   ```bash
   git push -u origin feature/your-feature-name
   ```

4. Create a Pull Request (PR) from your feature branch to `develop`

### Code Review and Integration

1. Request reviews from team members
2. Address any feedback and make necessary changes
3. Once approved, merge the PR into `develop`

### Release Process

1. When `develop` is stable, create a PR to merge into `main`
2. After merging to `main`, create a PR to merge into `production`
3. Tag the release in `production`:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

## Best Practices

### Commit Messages

- Use clear, descriptive commit messages
- Follow the format: `<type>(<scope>): <description>`
- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(auth): add user authentication`

### Branch Naming

- Feature branches: `feature/feature-name`
- Bug fixes: `fix/bug-description`
- Hotfixes: `hotfix/issue-description`

### Pull Requests

- Provide clear descriptions of changes
- Link related issues
- Request reviews from relevant team members
- Ensure all tests pass before merging

## Common Commands

### Branch Management
```bash
# Create and switch to a new branch
git checkout -b branch-name

# Switch to an existing branch
git checkout branch-name

# List all branches
git branch -a

# Delete a local branch
git branch -d branch-name

# Delete a remote branch
git push origin --delete branch-name
```

### Syncing with Remote
```bash
# Pull latest changes
git pull origin branch-name

# Push changes
git push origin branch-name

# Force push (use with caution)
git push -f origin branch-name
```

### Stashing Changes
```bash
# Stash changes
git stash

# Apply stashed changes
git stash apply

# List stashes
git stash list
```

## Troubleshooting

### Resolving Merge Conflicts
1. Pull the latest changes
2. Resolve conflicts in your editor
3. Add resolved files
4. Commit the changes

### Reverting Changes
```bash
# Revert a commit
git revert commit-hash

# Reset to a previous commit (use with caution)
git reset --hard commit-hash
```

## Branch Protection Rules

- `main` and `production` branches are protected
- Direct pushes to protected branches are not allowed
- All changes must go through Pull Requests
- PRs require at least one approval before merging
- Status checks must pass before merging

## Contact

For any questions or issues regarding the Git workflow, please contact the repository maintainers. 