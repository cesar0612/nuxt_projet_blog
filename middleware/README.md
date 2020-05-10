# MIDDLEWARE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your application middleware.
The middleware lets you define custom function to be ran before rendering a page or a group of pages (layouts).

In universal mode, middlewares will be called server-side once (on the first request to the Nuxt app or when page refreshes) and client-side when navigating to further routes. In SPA mode, middlewares will be called client-side on the first request and when navigating to further routes.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing#middleware).
