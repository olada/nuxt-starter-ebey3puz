<template>
    <h1>Index</h1>
    <p>
        This reproduction is supposed to show that nuxt considers .spec.ts files as plugins though they should be ignored by default.

        On top of that running vitest will render following error:
    </p>

    <pre>

        ❯ plugins/customFetch.nuxt.spec.ts (0)

        ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Suites 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
        
        FAIL  plugins/customFetch.nuxt.spec.ts [ plugins/customFetch.nuxt.spec.ts ]
        Error: No test suite found in file /home/olada/nuxt-starter-ebey3puz/plugins/customFetch.nuxt.spec.ts
        ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯
        
        Test Files  1 failed (1)
            Tests  no tests
        Start at  23:38:39
        Duration  619ms
        
        FAIL  Tests failed. Watching for file changes...
            press h to show help, press q to quit
        Cancelling test run. Press CTRL+c again to exit forcefully.
        
         ELIFECYCLE  Test failed. See above for more details.

    </pre>
</template>