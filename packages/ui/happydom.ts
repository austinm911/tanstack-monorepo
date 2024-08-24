// https://bun.sh/guides/test/happy-dom
//! only able to get this to work when the bunfig.toml and this file are in the subpackages, not in the root

import { GlobalRegistrator } from '@happy-dom/global-registrator'

GlobalRegistrator.register()
