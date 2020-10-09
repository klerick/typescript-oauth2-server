export default ({ router }) => {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    console.log("USE FATHOM");
    (function(f, a, t, h, o, m) {
      a[h] = a[h] || function() {
        (a[h].q = a[h].q || []).push(arguments);
      };
      o = f.createElement("script"),
        m = f.getElementsByTagName("script")[0];
      o.async = 1;
      o.src = t;
      o.id = "fathom-script";
      m.parentNode.insertBefore(o, m);
    })(document, window, "//analytics.designcanvas.digital/tracker.js", "fathom");
    fathom("set", "siteId", "VQWDE");
    fathom("trackPageview");

    router.afterEach(() => {
      console.log("TRACK FATHOM");
      fathom("set", "siteId", "VQWDE");
      fathom("trackPageview");
    });
  }
}