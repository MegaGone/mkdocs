# Versiones
## iOS

### 8.0.5 <small>_ Diciembre 14, 2021</small> { id="8.0.5" }

- Fixed #3302: Footer refactoring induced ellipsis in some browsers
- Fixed #3313: Details always rendered closed on load (8.0.4 regression)

### 8.0.4 <small>_ Octubre 7, 2021</small> { id="8.0.4" }

- Improved support for deeply nested code annotations
- Improved code annotation and copy-to-clipboard interop
- Improved styling for code annotations inside admonitions
- Fixed #3274: Invalid anchor positioning when using instant loading
- Fixed #3294: Lists after code blocks without code annotations disappearing
- Fixed several positioning issues for code annotations
- Fixed JavaScript source map roots

### 8.0.3 <small>_ Septiembre 2, 2021</small> { id="8.0.3" }

- Removed deprecated `google_analytics` setting (was forgotten in 8.0.0)
- Fixed syntax error in Swedish and Polish translations
- Fixed #3283: Invalid back-to-top button position with sticky navigation tabs
- Fixed #3285: Default details marker showing due to Safari bug

### 8.0.2 <small>_ Agosto 15, 2021</small> { id="8.0.2" }

- Fixed #3275: Code annotations always disappear on click

### 8.0.1 <small>_ Julio 28, 2021</small> { id="8.0.1" }

- Improved rendering of code annotation markers
- Fixed #3265: Wrong margin on nested admonitions
- Fixed wrong `box-sizing` for code annotations in details

### 8.0.0 <small>_ Julio 2, 2021</small> { id="8.0.0" }

- Added support for code annotations
- Added support for anchor tracking
- Added support for version warning
- Added `copyright` partial for easier override
- Removed deprecated content tabs legacy implementation
- Removed deprecated `seealso` admonition type
- Removed deprecated `site_keywords` setting (unsupported by MkDocs)
- Removed deprecated prebuilt search index support
- Removed deprecated web app manifest – use customization
- Removed `extracopyright` variable – use new `copyright` partial
- Removed Disqus integation – use customization
- Switched to `:is()` selectors for simple selector lists
- Switched autoprefixer from `last 4 years` to `last 2 years`
- Improved CSS overall to match modern standards
- Improved CSS variable semantics for fonts
- Improved extensibility by restructuring partials
- Improved handling of `details` when printing
- Improved keyboard navigation for footnotes
- Fixed #3214: Search highlighting breaks site when empty

### 7.3.6 <small>_ Mayo 10, 2021</small> { id="7.3.6" }

- Added support for adding titles to code blocks

### 7.3.5 <small>_ Abril 23, 2021</small> { id="7.3.5" }

- Added support for setting table of contents title via `mkdocs.yml`
- Fixed back-to-top button position for right-to-left languages

### 7.3.4 <small>_ Marzo 17, 2021</small> { id="7.3.4" }

- Bumped MkDocs version to 1.2.3 to mitigate [CVE-2021-40978]
- Fixed spacing issues when using integrate table of contents with tabs
- Fixed some spacings issues for right-to-left languages
- Fixed race condition in search initialization

  [CVE-2021-40978]: https://nvd.nist.gov/vuln/detail/CVE-2021-40978

### 7.3.3 <small>_ Febrero 28, 2021</small> { id="7.3.3" }

- Rewrite of entire documentation
- Adjusted height of new content tabs to match single line code blocks
- Fixed new content tabs missing right padding in some browsers on overflow
- Fixed new content tabs bleeding out of flex container on overflow
- Fixed new content tabs overflow scrolling bugs on some browsers
- Fixed new content tabs stealing keyboard access when active
- Fixed some spacings issues for right-to-left languages

### 7.3.2 <small>_ Enero 11, 2021</small> { id="7.3.3" }

- Rewrite of entire documentation
- Adjusted height of new content tabs to match single line code blocks
- Fixed new content tabs missing right padding in some browsers on overflow
- Fixed new content tabs bleeding out of flex container on overflow
- Fixed new content tabs overflow scrolling bugs on some browsers
- Fixed new content tabs stealing keyboard access when active
- Fixed some spacings issues for right-to-left languages