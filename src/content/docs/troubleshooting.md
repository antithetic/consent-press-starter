---
title: Troubleshooting Guide
description: Solutions for common issues encountered while working with the Consent Press Starter project
---

# Troubleshooting Guide

This document provides solutions for common issues you might encounter while working with the Consent Press Starter project.

## Table of Contents

- [Git Related Issues](#git-related-issues)
- [Build and Development Issues](#build-and-development-issues)
- [Asset Related Issues](#asset-related-issues)

## Git Related Issues

### Missing or Invalid Branch

**Error Message:**

```
error: unable to delete '[branch-name]': remote ref does not exist
```

**Solution:**

1. First, check if the branch exists locally:
   ```bash
   git branch -a
   ```
2. If the branch is only showing as a remote tracking reference but not on remote:
   ```bash
   git remote prune origin
   ```
   This will clean up stale remote-tracking branches.

### Merge Conflicts

**Error Message:**

```
CONFLICT (content): Merge conflict in [filename]
Automatic merge failed; fix conflicts and then commit the result.
```

**Solution:**

1. Open the conflicted files and resolve the conflicts
2. Stage the resolved files:
   ```bash
   git add [filename]
   ```
3. Complete the merge:
   ```bash
   git commit -m "Resolve merge conflicts"
   ```

## Build and Development Issues

### Missing Dependencies

**Error Message:**

```
Cannot find module '[module-name]'
```

**Solution:**

1. Install or reinstall dependencies:
   ```bash
   pnpm install
   ```
2. If the issue persists, try cleaning the cache:
   ```bash
   pnpm store prune
   ```

### Port Already in Use

**Error Message:**

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:**

1. Find the process using the port:
   ```bash
   lsof -i :3000
   ```
2. Kill the process:
   ```bash
   kill -9 [PID]
   ```

## Asset Related Issues

### Missing Asset Files

**Error Message:**

```
ENOENT: no such file or directory, open '[filename]'
```

**Solution:**

1. Check if the asset exists in the correct directory
2. Ensure the path in your code matches the actual file location
3. If the asset is missing:
   - Add the missing asset to the correct directory
   - Update the reference path in your code
   - Commit the new asset if it should be version controlled

### SVG Rendering Issues

**Error Message:**

```
Failed to load resource: the server responded with a status of 404 (Not Found)
```

**Solution:**

1. Verify the SVG file exists in the correct location
2. Check the file permissions
3. Ensure the SVG markup is valid
4. For dynamic SVGs using `currentColor`:
   - Make sure the parent element has a color defined
   - Verify the SVG has the correct attributes (`fill="currentColor"`)

## Best Practices for Error Prevention

1. **Before Starting Work:**

   - Always pull the latest changes from the main branch
   - Create a new feature branch from the updated main
   - Verify all dependencies are installed

2. **During Development:**

   - Commit frequently with clear messages
   - Keep branches focused on single features/fixes
   - Test changes locally before pushing

3. **Before Merging:**
   - Pull the latest changes from the target branch
   - Resolve any conflicts locally
   - Run all tests and build checks
   - Review the changes one final time

## Getting Help

If you encounter an issue not covered in this guide:

1. Check the project's GitHub issues
2. Search the error message online
3. Ask for help in the project's communication channels
4. Create a new issue with:
   - Clear description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Relevant error messages and logs
