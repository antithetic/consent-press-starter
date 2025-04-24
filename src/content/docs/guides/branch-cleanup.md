---
title: Branch Cleanup and Synchronization Guide
description: A comprehensive guide on how to clean up branches and synchronize them with main/develop branches
---

# Branch Cleanup and Synchronization Guide

This guide covers common scenarios for branch cleanup and synchronization, including how to handle stale branches, discard changes, and ensure branches are in sync.

## Scenario 1: Cleaning Up Feature Branches

### When to Use

- After a feature branch has been merged
- When you need to remove stale branches
- When you want to clean up your local and remote repository

### Steps

1. Switch to your main or develop branch:

```bash
git checkout develop
```

2. Delete the local feature branch:

```bash
git branch -d feature/branch-name
```

Note: Use `-D` instead of `-d` if the branch hasn't been merged yet and you want to force delete it.

3. Delete the remote feature branch:

```bash
git push origin --delete feature/branch-name
```

4. Prune stale remote-tracking branches:

```bash
git fetch --prune
```

## Scenario 2: Discarding Local Changes and Cleaning Up

### When to Use

- When you have unwanted local changes
- When you need to start fresh from the remote branch
- When you want to abandon work in progress

### Steps

1. If you have changes stashed:

```bash
# View stash list
git stash list

# Drop the most recent stash
git stash drop

# Drop a specific stash
git stash drop stash@{n}

# Clear all stashes
git stash clear
```

2. If you have uncommitted changes you want to discard:

```bash
# Discard changes in working directory
git restore .

# Discard changes for a specific file
git restore path/to/file
```

## Scenario 3: Synchronizing Branches

### When to Use

- When branches have diverged
- When you need to make a branch exactly match main/develop
- When you need to reset a branch to a known good state

### Steps

1. Fetch latest changes from remote:

```bash
git fetch --all
```

2. Ensure main/source branch is up to date:

```bash
git checkout main
git pull origin main
```

3. Reset target branch to match main:

```bash
git checkout target-branch
git reset --hard main
```

4. Force push to update remote (use with caution):

```bash
git push origin target-branch --force
```

## Important Notes

- Always make sure you don't need any of the changes before discarding them
- Be extremely careful with force push (`--force`) as it overwrites remote history
- When in doubt, create a backup branch before performing destructive operations
- Consider using `--force-with-lease` instead of `--force` for safer force pushes

## Example Use Cases

### Example 1: Feature Branch Cleanup After Merge

```bash
# Switch to develop branch
git checkout develop

# Delete local feature branch
git branch -d feature/user-authentication

# Delete remote feature branch
git push origin --delete feature/user-authentication

# Prune stale remote branches
git fetch --prune
```

### Example 2: Reset Develop to Match Main

```bash
# Fetch all changes
git fetch --all

# Update main
git checkout main
git pull origin main

# Reset develop to match main
git checkout develop
git reset --hard main
git push origin develop --force
```

### Example 3: Cleanup Work in Progress

```bash
# Stash changes if you might need them later
git stash

# Or discard changes completely
git restore .

# Delete local branch
git branch -D feature/work-in-progress

# Delete remote branch
git push origin --delete feature/work-in-progress
```

## Best Practices

1. Always ensure you're working with the latest changes (`git fetch --all`)
2. Create backup branches for important work before destructive operations
3. Communicate with your team before force pushing to shared branches
4. Regularly clean up merged and stale branches to keep the repository tidy
5. Use branch protection rules on important branches (main, develop) to prevent accidental deletions
