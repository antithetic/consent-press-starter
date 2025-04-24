---
title: Git Branch Management
description: Guide for managing Git branches, including safe deletion and branch switching procedures
date: 2024-04-23
---

# Git Branch Management Guide

## How to Delete Current Branch and Return to Original Branch

This guide explains how to safely delete your current working branch and switch back to the original branch (e.g., `develop` or `main`).

### Step 1: Check Your Current Branch

First, verify which branch you're currently on:

```bash
git branch --show-current
```

### Step 2: Check for Uncommitted Changes

Before switching branches, check if you have any uncommitted changes:

```bash
git status
```

### Step 3: Handle Uncommitted Changes

If you have uncommitted changes, you have two options:

#### Option A: Discard All Changes

If you want to discard all changes and untracked files:

```bash
# Remove untracked files and directories
git clean -fd

# Discard changes in tracked files
git restore .
```

#### Option B: Save Changes for Later (Optional)

If you want to keep the changes for later:

```bash
# Stash your changes
git stash save "your stash message"
```

### Step 4: Switch to Original Branch and Delete Working Branch

Once your changes are handled, switch to the original branch and delete your working branch:

```bash
# Switch to original branch (replace 'develop' with your target branch)
git checkout develop

# Delete the working branch
git branch -D your-branch-name
```

Note: The `-D` flag forces deletion even if the branch hasn't been merged. Use `-d` (lowercase) for a safer delete that only works on merged branches.

### Important Notes

1. Make sure you're certain about discarding changes before using `git clean` and `git restore`
2. The `-D` flag will force delete your branch, so make sure you don't need it anymore
3. If you stashed changes, you can retrieve them later using `git stash pop` or `git stash apply`

### Example

```bash
# Check current branch
git branch --show-current
# Output: feature/my-feature

# Check status
git status

# Discard changes (if needed)
git clean -fd
git restore .

# Switch to develop and delete feature branch
git checkout develop
git branch -D feature/my-feature
```
