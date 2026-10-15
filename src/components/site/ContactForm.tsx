import { useEffect, useRef } from "react";

const FORM_ID = "Y9shLcHy505smRITcAh9";
const IFRAME_ID = `inline-${FORM_ID}`;
const EMBED_SRC = "https://link.eztransition.com/js/form_embed.js";

/**
 * The EZ Transition contact form.
 *
 * `form_embed.js` re-parents the form iframe into wrapper nodes it creates
 * (id `${IFRAME_ID}-wrapper`). If React rendered that iframe itself, the
 * script moves a node React still owns and unmounting later throws
 * "Failed to execute 'removeChild' on 'Node'". So the iframe is built with
 * plain DOM APIs inside a container React renders empty and never touches;
 * on cleanup we drop the container's contents, leaving React's own node intact.
 */
export function ContactForm() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://link.eztransition.com/widget/form/${FORM_ID}`;
    iframe.id = IFRAME_ID;
    iframe.className = "h-[796px] w-full rounded-[3px] border-0";
    iframe.title = "Contact";
    const attributes: Record<string, string> = {
      "data-layout": "{'id':'INLINE'}",
      "data-trigger-type": "alwaysShow",
      "data-trigger-value": "",
      "data-activation-type": "alwaysActivated",
      "data-activation-value": "",
      "data-deactivation-type": "neverDeactivate",
      "data-deactivation-value": "",
      "data-form-name": "Contact",
      "data-height": "796",
      "data-layout-iframe-id": IFRAME_ID,
      "data-form-id": FORM_ID,
      "data-cookie-consent": "true",
      "data-cookie-consent-provider": "auto",
    };
    for (const [name, value] of Object.entries(attributes)) iframe.setAttribute(name, value);
    host.appendChild(iframe);

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      host.replaceChildren();
    };
  }, []);

  return <div ref={hostRef} className="w-full" />;
}
