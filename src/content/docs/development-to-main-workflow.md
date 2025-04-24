---
title: Development to Main Workflow
description: Step-by-step guide for moving code from development to main branch, including best practices and examples
date: 2024-04-24
---

# Development to Main Workflow Guide

This document outlines the process of moving code from development to the main branch, including best practices, commands, and examples.

## Overview

The typical flow is:

```develop → feature/* → develop → main → production

```

## Step-by-Step Process

### 1. Starting Development

```bash
# Start from develop branch
git checkout develop
git pull origin develop

# Create your feature branch
git checkout -b feature/your-feature-name
```

### 2. Development Workflow

```bash
# Make your changes
# ... code changes ...

# Stage changes
git add .

# Commit changes
git commit -m "feat(scope): description of changes"

# Push to remote
git push origin feature/your-feature-name
```

### 3. Preparing for Merge to Develop

Before merging to develop:

1. Ensure all tests pass
2. Update documentation if needed
3. Resolve any conflicts
4. Get code review approval

```bash
# Update your branch with latest develop
git checkout develop
git pull origin develop
git checkout feature/your-feature-name
git merge develop

# Resolve any conflicts
# ... resolve conflicts ...

# Push resolved changes
git push origin feature/your-feature-name
```

### 4. Creating Pull Request to Develop

1. Go to GitHub repository
2. Click "New Pull Request"
3. Select:
   - Base: `develop`
   - Compare: `feature/your-feature-name`
4. Add description:
   - What changes were made
   - Why they were made
   - Any testing instructions
   - Related issues

### 5. Code Review Process

During code review:

- Address all review comments
- Make necessary changes
- Push updates to your branch
- Wait for final approval

```bash
# After making review changes
git add .
git commit -m "fix: address review comments"
git push origin feature/your-feature-name
```

### 6. Merging to Develop

After approval:

```bash
# Merge to develop
git checkout develop
git merge feature/your-feature-name
git push origin develop
```

### 7. Preparing for Main Branch

Before merging to main:

1. Ensure develop is stable
2. Run final tests
3. Update version numbers if needed
4. Update changelog

```bash
# Create release branch from develop
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0

# Make any final adjustments
# ... make changes ...

# Commit and push release branch
git add .
git commit -m "chore(release): prepare for v1.0.0"
git push origin release/v1.0.0
```

### 8. Creating Pull Request to Main

1. Go to GitHub repository
2. Click "New Pull Request"
3. Select:
   - Base: `main`
   - Compare: `release/v1.0.0`
4. Add description:
   - Release notes
   - Breaking changes
   - Migration instructions
   - Testing results

### 9. Merging to Main

After approval:

```bash
# Merge to main
git checkout main
git merge release/v1.0.0
git push origin main

# Tag the release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## Use Cases

### 1. Simple Feature Development

```bash
# Start development
git checkout develop
git checkout -b feature/user-login

# Make changes and commit
git add .
git commit -m "feat(auth): add user login functionality"

# Push and create PR
git push origin feature/user-login
# Create PR to develop
```

### 2. Bug Fix Development

```bash
# Start from develop
git checkout develop
git checkout -b fix/login-validation

# Fix the issue
git add .
git commit -m "fix(auth): correct login validation logic"

# Push and create PR
git push origin fix/login-validation
# Create PR to develop
```

### 3. Release Preparation

```bash
# Create release branch
git checkout develop
git checkout -b release/v1.1.0

# Update version and changelog
git add .
git commit -m "chore(release): prepare for v1.1.0"

# Push and create PR
git push origin release/v1.1.0
# Create PR to main
```

## Best Practices

### Before Merging to Develop

- [ ] All tests pass
- [ ] Code is reviewed
- [ ] Documentation is updated
- [ ] No merge conflicts
- [ ] Follows coding standards

### Before Merging to Main

- [ ] Develop branch is stable
- [ ] All features are tested
- [ ] Version numbers updated
- [ ] Changelog updated
- [ ] Release notes prepared

### Commit Messages

- Use conventional commits
- Be clear and descriptive
- Reference issues when applicable
- Keep commits focused and atomic

### Branch Management

- Delete feature branches after merge
- Keep develop branch clean
- Use release branches for main merges
- Tag releases appropriately

## Troubleshooting

### Merge Conflicts

1. Pull latest changes
2. Resolve conflicts
3. Test changes
4. Commit resolution
5. Push changes

```bash
# Resolving conflicts
git checkout develop
git pull origin develop
git checkout feature/your-feature-name
git merge develop
# ... resolve conflicts ...
git add .
git commit -m "fix: resolve merge conflicts"
git push origin feature/your-feature-name
```

### Failed Tests

1. Identify failing tests
2. Fix issues
3. Run tests locally
4. Push fixes
5. Verify CI passes

### Release Issues

1. Create hotfix branch if needed
2. Fix issues
3. Test thoroughly
4. Merge to main
5. Tag new release

## Automation Tips

### CI/CD Integration

- Set up automated testing
- Configure branch protection
- Automate version updates
- Set up release automation

### Git Hooks

- Pre-commit hooks for linting
- Pre-push hooks for testing
- Commit message validation
- Branch naming validation

## Contact

For any questions about this workflow, contact the repository maintainers.
