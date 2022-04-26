
    /**
     * Performance tweaker loader file
     * */

    window._pt_config = {
        currentProfile: "normal"
    };

    (async function() {
        if($fs.utils.exist("/a/.config/perf_twk/profiles.json") !== 0)
            return;
        const profiles = JSON.parse(await localforage.getItem(".config/perf_twk/profiles.json"));
        const pftwEl = document.createElement('style');
        pftwEl.setAttribute("id", "_ptwk_cssApply");
        pftwEl.innerHTML = profiles[window._pt_config.currentProfile].cssApply;
        document.body.appendChild(pftwEl);
    })();