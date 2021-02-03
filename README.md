# Project Name

> Title-Banner Service for rpt25-FEC-tater-tots

## Related Projects

  - https://github.com/rpt25-FEC-tatertots/similar-to-this-product.git
  - https://github.com/rpt25-FEC-tatertots/GiGi-DetailedImages.git
  - https://github.com/rpt25-FEC-tatertots/Image-Service-David.git
  - https://github.com/rpt25-FEC-tatertots/overview.git
  - https://github.com/rpt25-FEC-tatertots/GiGi-Sourcing.git
  - https://github.com/rpt25-FEC-tatertots/Inventory-Service-Danny.git
  - https://github.com/rpt25-FEC-tatertots/Reviews-Service-David.git
  - https://github.com/rpt25-FEC-tatertots/proxy-danny.git

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage


> NPM Install, the postInstall script will seed the database with new information
> run webpack to compile the title_banner.js bundle in the ./public/dist folder
> if changes need to be made, NPM run client-dev will set webpack to watching the files and re-compiling with changes
> NPM run server-dev to start the server listening
> If you are using this service as a stand-alone service, just browse to http://localhost:5003/:productID
> If you are using this service on a proxy you will need a div available with the id="title-banner", the app will load itself into that div.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

