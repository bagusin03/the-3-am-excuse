# The 3 AM Excuse

[![make.fun · u-hazel-walrus-38-4764-the-3-am-excuse-c1017878](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/bagusin03/the-3-am-excuse/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/bagusin03/the-3-am-excuse/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878?utm_source=github&utm_medium=readme&utm_campaign=u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

One line, 128 characters — a hardware wallet refuses to sign at 3 AM because its private key is dreaming in seed phrases, and it will not wake up for a coin found in a group chat at 2:59.

`main.ts` writes the single 128-character line to `/output/entry.txt`:

> No. It's 3 AM, my private key is dreaming in seed phrases, and I won't wake it to sign a coin you found in a group chat at 2:59.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–200 character single-line gate, requires the line to name the 3 AM hour, and verifies the written file round-trips exactly with no trailing newline.

Run it with Node 22+:

```
node main.ts
```

Built for the make.fun bounty [The 3 AM Excuse](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878). Enter make.fun with referral code `0d6e5fs5`: https://make.fun/r/0d6e5fs5
