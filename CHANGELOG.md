# nystudio107/devmode Change Log

## 2.8.1 - UNRELEASED
### Added
* Updated to Vite 6
* Updated to Tailwind 4

## 2.8.0 - 2024.01.08
### Added
* Updated to Craft CMS 5

## 2.7.3 - 2024.01.08
### Changed
* Updated the `buildchain` to use Vite 5

## 2.7.2 - 2024.01.08
### Changed
* Updated to the latest Craft CMS 4

## 2.7.1 - 2023.09.22
### Changed
* Move the `src/` dir directly into `buildchain/` to avoid issues with `nodeResolve`
* Updated to the latest db dump
* Updated to the latest Composer deps
* Updated to the latest npm deps

## 2.7.0 - 2022.12.14
### Changed
* Move to Vite 4.x

## 2.6.5 - 2022.05.04
### Added
* Determine the container name separator character by checking the Docker Compose API version at runtime

### Changed
* Updated to release version of Craft CMS 4

## 2.6.4 - 2022.05.02
### Fixed
* Clean up initial check for `composer.lock` or `vendor/autoload.php` to ensure the first-time install is done

## 2.6.3 - 2022.04.28
### Changed
* Updated to Craft CMS `4.0.0-RC1` & latest Composer deps

## 2.6.2 - 2022.04.15
### Changed
* Remove `enableLogging` and `enableProfiling` from `config/db.php` as they've now gone away
* Changed `bootstrap.php` to allow `.env`-set environment variables override existing injected environment variables ([#82](https://github.com/craftcms/craft/issues/82))

## 2.6.1 - 2022.04.13
### Added
* Added Craft CMS 4 db dump
* Added `config/custom.php` for custom config settings

### Changed
* Added compressed `.gz` db dump support
* Set `enableLogging` and `enableProfiling` in `config/db.php`
* Use `"eslint": "^7.0.0"` to avoid package version conflicts with `vite-plugin-eslint`

## 2.6.0 - 2022.04.08
### Changed
* Switched over to Craft CMS 4.0.0-beta.4

## 2.5.8 - 2022.04.08
### Changed
* Run migrations first via `composer.json` scripts, because Craft won't apply Project Config if there are pending migrations
* Added `tty: true` back in now that the issue has been fixed in the Docker Compose API `2.4.1` ([#9348](https://github.com/docker/compose/pull/9348))
* Wait for both `vendor/autoload.php` as we as `composer.lock` before starting up the queue listener

## 2.5.7 - 2022.04.06
### Changed
* Updated to latest `composer.json` and `package.json` deps
* Switched over to using a script for db seeding

## 2.5.6 - 2022.03.30
### Changed
* Fix `WORKDIR` in `php-prod-craft` container so `make craft` etc. commands work as expected
* Fix `WORKDIR` in `node-dev-vite` container so `make npm` etc. commands work as expected
* Fix linting issue with `import.meta.hot`

## 2.5.5 - 2022.03.28
### Changed
* Add `disableProcessTimeout` to the `post-craft-update` Composer scripts, and run Project Config before migrations

## 2.5.4 - 2022.03.26
### Added
* Ensure permissions on directories Craft needs to write to

## 2.5.3 - 2022.03.26
### Added
* Added more logging to indicate when a container is waiting for another service to start up, and when seeding a database is complete
* Run `composer craft-update` after a `composer install` is done via `composer_install.sh`

### Changed
* Moved permissions setting to Docker image creation

## 2.5.2 - 2022.03.26
### Added
* Dramatically sped up the startup time for the PHP containers by moving the permissions setting script to run asynchronously in the queue container via the `run_queue.sh` script

## 2.5.1 - 2022.03.17
### Added

* Run migrations / project config changes via the `run_queue.sh` script, only after the db container responds

## 2.5.0 - 2022.03.17

### Added
* Significantly increased startup times via a `composer_install.sh` script that only runs `composer install` at container startup time if `composer.lock` or `vendor/` is missing
* Significantly increased startup times via a `npm_install.sh` script that only runs `npm install` at container startup time if `package-lock.json` or `node_modules/` is missing

### Changed
* Added a `sleep 60` in the `run_queue.sh` containers, so they don't run the "keepalive" script until the other containers have started
* refactor: Remove `tty: true` which causes console output to not appear in Docker Composer API 2.3.0. ref: https://github.com/docker/compose/issues/9288

## 2.4.0 - 2021.07.01
### Changed
* Updated to Craft CMS 3.7.0-beta.5

## 2.1.11 - 2020.12.03
### Changed
* Moved to webpack 5 for the build process
* Numerous other changes globbed together 

## 1.1.3 - 2020.02.17
### Changed
* Containerized the local dev environment via Docker

## 1.1.2 - 2019.08.10
### Changed
* Moved the `license.key` over to `LICENSE_KEY` environmental variables
* Moved the plugin license over to environmental variables
* Re-enabled the Service Worker

## 1.1.1 - 2019.08.10
### Changed
* Converted over to using Project Config's `project.yaml` and disabled `allowAdminChanges` in production

## 1.1.0 - 2019.08.10
### Added
* Open sourced it all
* Added auto-completion via [Auto-Complete Craft CMS 3 APIs in Twig with PhpStorm](https://nystudio107.com/blog/auto-complete-craft-cms-3-apis-in-twig-with-phpstorm)
* Added webpack for the build system as per [An Annotated webpack 4 Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-webpack-4-config-for-frontend-web-development)
* Added auto-complete searching through paginated past episodes
* Added an experimental light/dark theme
* Refactored the JSON-LD structured data as per [Annotated JSON-LD Structured Data Examples](https://nystudio107.com/blog/annotated-json-ld-structured-data-examples)
* Added [webmentions](https://webmention.io/) support for podcast episodes via Twig/custom module
* Added a display of upcoming episodes pulled from Trello
* Added Google AMP pages

### Changed
* Upgraded to Tailwind CSS `^1.0.0`
* Refactored base layout templates to be more flexible, AMP vs. regular, AJAX, etc.

## 1.0.1 - 2017.12.01
### Added
* Added accessible tabhandler.js
* Added Tailwind CSS
* Added support for Redis via `app.php`
* Fixed `package.json` paths for `web/`
* Cleaned up the default templates
* Added `src/conf/` for Nginx or other configuration files

## 1.0.0 - 2017.11.26
### Added
* Initial release

Brought to you by [nystudio107](https://nystudio107.com/)
