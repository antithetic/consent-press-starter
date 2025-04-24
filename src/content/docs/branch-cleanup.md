---
title: Branch Cleanup Guide
description: Step-by-step guide for cleaning up local and remote branches after successful merges
date: 2024-04-23
---

# Branch Cleanup Guide

This guide explains how to safely clean up branches both locally and remotely after successfully merging your changes to the `develop` branch.

## When to Clean Up Branches

You should clean up branches when:

- Your feature/fix branch has been successfully merged to `develop`
- The changes have been reviewed and approved
- You no longer need the branch for reference
- You want to keep your local and remote repositories clean

## Prerequisites

Before cleaning up branches:

1. Ensure your changes are merged to `develop`
2. Verify the merge was successful
3. Make sure you don't need the branch anymore
4. Have the branch name ready

## Local Branch Cleanup

### Step 1: Switch to Develop Branch

First, switch to the `develop` branch:

```bash
git checkout develop
```

### Step 2: Pull Latest Changes

Pull the latest changes to ensure you're up to date:

```bash
git pull origin develop
```

### Step 3: List Local Branches

View all local branches to identify which ones to delete:

```bash
git branch
```

### Step 4: Delete Local Branch

Delete the local branch you no longer need:

```bash
# For merged branches (safer)
git branch -d branch-name

# For unmerged branches (force delete)
git branch -D branch-name
```

## Remote Branch Cleanup

### Step 1: List Remote Branches

View all remote branches:

```bash
git branch -r
```

### Step 2: Delete Remote Branch

Delete the remote branch:

```bash
git push origin --delete branch-name
```

## Combined Cleanup

You can combine local and remote cleanup in one command:

```bash
# Delete both local and remote branch
git branch -d branch-name && git push origin --delete branch-name
```

## Common Scenarios

### 1. Cleaning Up After Feature Branch

```bash
# After merging feature/user-login to develop
git checkout develop
git pull origin develop
git branch -d feature/user-login
git push origin --delete feature/user-login
```

### 2. Cleaning Up After Fix Branch

```bash
# After merging fix/login-validation to develop
git checkout develop
git pull origin develop
git branch -d fix/login-validation
git push origin --delete fix/login-validation
```

### 3. Cleaning Up Multiple Branches

```bash
# Delete multiple local branches
git branch -d feature/user-login fix/login-validation

# Delete multiple remote branches
git push origin --delete feature/user-login fix/login-validation
```

## Best Practices

1. **Always Verify Merges**

   - Double-check that your changes are properly merged
   - Ensure no important work is lost

2. **Use Descriptive Branch Names**

   - Makes it easier to identify branches to delete
   - Helps prevent accidental deletions

3. **Clean Up Regularly**

   - Don't let old branches accumulate
   - Keep your repository clean and organized

4. **Backup Important Branches**
   - If you might need a branch later, consider tagging it
   - Create a backup branch if needed

## Troubleshooting

### Branch Won't Delete Locally

If you get an error about unmerged changes:

```bash
# Check if the branch is fully merged
git branch --merged

# If you're sure you want to delete it anyway
git branch -D branch-name
```

### Remote Branch Already Deleted

If you get an error about the remote branch not existing:

```bash
# Prune stale remote-tracking branches
git remote prune origin
```

## Safety Tips

1. Always double-check branch names before deleting
2. Consider using `-d` instead of `-D` for safer deletion
3. Keep a list of important branches you want to preserve
4. Use `git branch --merged` to see which branches are safe to delete
5. Consider creating a backup tag before deleting important branches

## Automation

You can create a script to automate branch cleanup:

```bash
#!/bin/bash

# Function to clean up a branch
cleanup_branch() {
    local branch=$1
    echo "Cleaning up branch: $branch"

    # Switch to develop and pull latest
    git checkout develop
    git pull origin develop

    # Delete local branch
    git branch -d "$branch"

    # Delete remote branch
    git push origin --delete "$branch"
}

# Example usage
cleanup_branch "feature/user-login"
```

## Related Resources

- [Git Branch Management](./git-branch-management.md)
- [Git Workflow](./git-workflow.md)
- [Development to Main Workflow](./development-to-main-workflow.md)
