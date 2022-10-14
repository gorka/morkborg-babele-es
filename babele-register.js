Hooks.on("init", () => {

  if(typeof Babele !== "undefined") {
    Babele.get().register({
      module: "morkborg-babele-es",
      lang: "es",
      dir: "compendium"
    });
  }

});
