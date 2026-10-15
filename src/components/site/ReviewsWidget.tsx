import { useEffect } from "react";

export function ReviewsWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://reputationhub.site/reputation/assets/review-widget.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <iframe
      className="lc_reviews_widget"
      src="https://reputationhub.site/reputation/widgets/review_widget/PNkQkGny1EJqL9gjewXm"
      frameBorder={0}
      scrolling="no"
      style={{ minWidth: "100%", width: "100%" }}
      title="Customer Reviews"
    />
  );
}
