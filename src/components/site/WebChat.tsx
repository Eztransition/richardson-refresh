import { useEffect } from "react";

/** LeadConnector web chat, loaded once after mount on every page. */
export function WebChat() {
  useEffect(() => {
    if (document.querySelector('script[data-widget-id="68f68566b214945879a22a8e"]')) return;
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "68f68566b214945879a22a8e");
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return null;
}
