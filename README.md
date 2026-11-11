# Video Edit Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Maintainer](https://img.shields.io/badge/Maintainer-Abdullah%20Formuli-orange.svg)](https://github.com/authrain-cloud-abdullahformuli)
[![Standard](https://img.shields.io/badge/Standard-Agent%20Skills-green.svg)](https://agentskills.io)
[![Multi-Platform](https://img.shields.io/badge/Platform-macOS%20%7C%20Windows%20%7C%20Linux-purple.svg)](#requirements)

Autonomous video editing skill for **Claude Code** and AI coding agents. 

Film talking-head clips on your phone, drop them in a folder, run `/video-edit`, and Claude autonomously transforms them into a finished, publication-ready vertical reel. It picks your best take of every line, removes dead air, isolates your subject from the background so animated titles sit behind your head, and applies designed looks with typography, motion graphics, and sound design.

You never open a video editor: watch the result, state your feedback in plain English, and the agent re-renders in about two minutes.

---

## ⚡ What It Does

1. **Intake & Transcription**: Scans your raw clips, creates contact sheets, and transcribes every take with word-level timing via `faster-whisper`.
2. **Intelligent Take Selection**: Rebuilds your script across multiple takes (repeat lines freely), picks the cleanest take for each sentence, and cuts dead air.
3. **Dynamic 4K Punch-ins**: Edits directly from source files with scale adjustments for visual rhythm.
4. **Subject Cutout**: Cuts the speaker out of the background via CoreML/HyperFrames so kinetic typography sits behind the subject.
5. **Designed Aesthetic Looks**:
   - **Bold**: Kinetic typographic hierarchy, big emphasis words layered behind the speaker.
   - **Cool Girl**: Warm color grade, yellow italic serif typography, and orbiting reel previews.
   - **Cool Dude**: Dark editorial color grading, tracked uppercase headers, and high-contrast serif accents.
6. **Animated Inserts & Overlays**: Generates animated app screens, Instagram profile follow buttons, and document scrolls in parallel sub-agents.
7. **Reels Safe Zone Enforcement**: Frame-by-frame verification ensuring captions and graphics avoid platform UI overlays.

---

## 💻 Requirements

- **macOS** (Apple Silicon CoreML hardware acceleration), **Windows 10/11**, or **Linux**
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code)
- [FFmpeg](https://ffmpeg.org)
- [Node.js 22+](https://nodejs.org)
- Python 3.10+ ([python.org](https://www.python.org/downloads/))
- Optional: [Apify](https://apify.com) account (free tier) to fetch public profile stats and reels automatically

On first run, the skill detects your operating system and provides the exact command line for any missing system dependency.

| Tool | macOS | Windows (PowerShell) | Linux |
|---|---|---|---|
| **FFmpeg** | `brew install ffmpeg` | `winget install --id Gyan.FFmpeg -e` | `sudo apt install ffmpeg` |
| **Node.js** | `brew install node` | `winget install --id OpenJS.NodeJS.LTS -e` | [nodejs.org](https://nodejs.org) |
| **Python** | `brew install python` | `winget install --id Python.Python.3.12 -e` | `sudo apt install python3 python3-venv` |

---

## 📦 Installation

### Option 1: Via Claude Code (Easiest)

Paste this into your Claude Code prompt:

```text
Install this skill for me: https://github.com/authrain-cloud-abdullahformuli/video-edit-skill
```

Claude will clone the repository into your skills directory.

### Option 2: Git Clone

```bash
git clone https://github.com/authrain-cloud-abdullahformuli/video-edit-skill "$HOME/.claude/skills/video-edit"
```

---

## 🎬 Usage

Once installed, trigger the skill with `/video-edit`:

```text
/video-edit I just dropped 5 clips in my downloads
```

### Style Direction & Notes

- **Specify looks per section:**
  ```text
  /video-edit use the cool girl look when I say "design aesthetics", cool dude after that, and bold everywhere else
  ```

- **Provide feedback iterations:**
  ```text
  Make captions slightly larger, reduce the grain, and trim the hesitation before "or you can get"
  ```

The pipeline applies your revisions and re-renders in ~2 minutes.

---

## 🔄 Updating

In Claude Code:

```text
Update the video-edit skill from https://github.com/authrain-cloud-abdullahformuli/video-edit-skill
```

Or via terminal:

```bash
git -C "$HOME/.claude/skills/video-edit" pull
```

---

## 🛡 Maintenance & Governance

This repository is maintained solely by:

- **[Abdullah Formuli](https://github.com/authrain-cloud-abdullahformuli)** (`authrainmedia@gmail.com`)

Maintained solely by Abdullah Formuli. No external contributions accepted.

---

## 📄 License

[MIT](LICENSE) © 2026 Abdullah Formuli
