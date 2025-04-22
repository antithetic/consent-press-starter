# Git Workflow Documentation

## Branch Structure

Our repository uses the following branch structure:

### Primary Branches
- `main` - Default branch, contains stable code
- `develop` - Development branch, where features are integrated
- `production` - Production branch, contains production-ready code

### Feature Branches
- `feature/*` - New feature development
- `fix/*` - Bug fixes and patches
- `chore/*` - Maintenance tasks and dependency updates
- `docs/*` - Documentation updates

## Branch Types and Use Cases

### Feature Branches (`feature/*`)
Use for developing new features or significant enhancements.

Examples:
- `feature/user-authentication`
- `feature/payment-integration`
- `feature/dark-mode`

Use Case:
```bash
# Creating a new feature branch
git checkout develop
git pull origin develop
git checkout -b feature/user-authentication

# After development
git add .
git commit -m "feat(auth): implement user authentication system"
git push origin feature/user-authentication
```

### Fix Branches (`fix/*`)
Use for bug fixes and patches to existing code.

Examples:
- `fix/login-validation`
- `fix/api-rate-limit`
- `fix/memory-leak`

Use Case:
```bash
# Creating a fix branch
git checkout develop
git pull origin develop
git checkout -b fix/login-validation

# After fixing
git add .
git commit -m "fix(auth): correct login validation logic"
git push origin fix/login-validation
```

### Chore Branches (`chore/*`)
Use for maintenance tasks, dependency updates, and configuration changes.

Examples:
- `chore/update-dependencies`
- `chore/ci-configuration`
- `chore/linter-setup`

Use Case:
```bash
# Creating a chore branch
git checkout develop
git pull origin develop
git checkout -b chore/update-dependencies

# After updates
git add .
git commit -m "chore(deps): update all dependencies to latest versions"
git push origin chore/update-dependencies
```

### Documentation Branches (`docs/*`)
Use for documentation updates and improvements.

Examples:
- `docs/api-documentation`
- `docs/installation-guide`
- `docs/contributing-guidelines`

Use Case:
```bash
# Creating a docs branch
git checkout develop
git pull origin develop
git checkout -b docs/api-documentation

# After documentation updates
git add .
git commit -m "docs(api): add comprehensive API documentation"
git push origin docs/api-documentation
```

## Branch Naming Convention

All branch names should:
- Be lowercase
- Use hyphens for word separation
- Be descriptive and concise
- Follow the pattern: `type/description`

Example branch structure:
```
main
├── develop
│   ├── feature/user-authentication
│   ├── feature/payment-integration
│   ├── fix/login-validation
│   ├── fix/api-rate-limit
│   ├── chore/update-dependencies
│   ├── chore/ci-configuration
│   ├── docs/api-documentation
│   └── docs/installation-guide
└── production
```

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

Branch protection rules are GitHub settings that help maintain code quality and prevent accidental changes to important branches. These rules are essential for maintaining the integrity of our codebase.

### Protected Branches

The following branches are protected:
- `main` - Default branch containing stable code
- `production` - Production branch containing deployable code

### Protection Settings

#### Basic Protection
- Direct pushes to protected branches are not allowed
- All changes must go through Pull Requests
- PRs require at least one approval before merging
- Status checks must pass before merging

#### Required Status Checks
- All CI/CD pipeline checks must pass
- Code coverage requirements must be met
- Build and test suites must complete successfully
- Dependencies must be up to date

#### Review Requirements
- At least one approval from team members
- Review from code owners if the PR affects their code
- No changes allowed after approval (unless explicitly requested)
- All conversations must be resolved before merging

#### Additional Rules
- Branches must be up to date before merging
- Force pushes are not allowed
- Branch deletion is restricted
- Linear history is preferred (no merge commits)

### Setting Up Branch Protection

To set up branch protection rules:

1. Go to repository settings
2. Navigate to "Branches" in the left sidebar
3. Under "Branch protection rules", click "Add rule"
4. Enter the branch name pattern (e.g., `main` or `production`)
5. Configure the following settings:
   - [x] Require a pull request before merging
   - [x] Require approvals
   - [x] Require status checks to pass
   - [x] Require branches to be up to date before merging
   - [x] Include administrators
   - [x] Restrict who can push to matching branches

### Managing Protected Branches

#### For Developers
- Always create feature branches from `develop`
- Keep your branches up to date with the base branch
- Request reviews from appropriate team members
- Address all review comments before merging

#### For Maintainers
- Monitor PRs for compliance with protection rules
- Review and approve PRs that meet quality standards
- Handle merge conflicts when necessary
- Ensure CI/CD pipelines are properly configured

### Troubleshooting Protection Issues

Common issues and solutions:

1. **Cannot push directly to protected branch**
   - Create a feature branch instead
   - Submit changes via PR

2. **PR blocked due to failing checks**
   - Review the failing checks
   - Fix the issues in your branch
   - Push the fixes to trigger new checks

3. **PR requires approvals**
   - Request reviews from team members
   - Address all review comments
   - Wait for required number of approvals

4. **Branch is out of date**
   - Update your branch with the latest changes
   - Resolve any conflicts
   - Push the updates

## Contact

For any questions or issues regarding the Git workflow, please contact the repository maintainers. 