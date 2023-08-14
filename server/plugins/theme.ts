export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', (html) => {
        html.bodyAppend.push(`<script>document.documentElement.setAttribute('data-theme', window.matchMedia(\"(prefers-color-scheme: light)\").matches?'light':'dark')</script>`)
    })
})
