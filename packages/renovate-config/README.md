# 📝 @froko/renovate-config

> [!WARNING]  
> This package is not published to npm - it's a configuration preset!

## 🔩 Usage

```json
// renovate.json
{
  "extends": [
    "github>froko/shared-configs//packages/renovate-config/index.json"
  ]
}
```

## 📝 Content

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "packageRules": [
    {
      "description": "Automerge non-major updates",
      "groupName": "all non-major dependencies",
      "groupSlug": "all-minor-patch",
      "matchPackageNames": ["*"],
      "matchUpdateTypes": ["minor", "patch"],
      "automerge": true,
      "schedule": ["* * 1 */3 *"]
    }
  ]
}
```
