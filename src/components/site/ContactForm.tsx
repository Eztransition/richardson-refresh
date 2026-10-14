import { useEffect } from "react";

export function ContactForm() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.eztransition.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <iframe
      src="https://link.eztransition.com/widget/form/Y9shLcHy505smRITcAh9"
      className="h-[796px] w-full rounded-[3px] border-0"
      id="inline-Y9shLcHy505smRITcAh9"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Contact"
      data-height="796"
      data-layout-iframe-id="inline-Y9shLcHy505smRITcAh9"
      data-form-id="Y9shLcHy505smRITcAh9"
      data-cookie-consent="true"
      data-cookie-consent-provider="auto"
      title="Contact"
    />
  );
}