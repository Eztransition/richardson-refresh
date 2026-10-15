import { describe, expect, it } from "vitest";
import { dumpsterSizePages } from "@/config/dumpster-sizes";

describe("Homepage rental terms", () => {
  it.each([
    ["10-yard-dumpster-rentals", "$355.00", "1-3 Day Rental", "2,000 Ibs. included", "14’L x 7’W x 4’H"],
    ["15-yard-dumpster-rentals", "$375.00", "1-4 Day Rental", "2,000 Ibs. included", "14’L x 7’W x 4’H"],
    ["20-yard-dumpster-rentals", "$450.00", "1-5 Day Rental", "4,000 Ibs. included", "14’L x 7’W x 5’H"],
  ])("preserves approved price, rental days, weight and dimensions for %s", (slug, price, days, weight, dimensions) => {
    const size = dumpsterSizePages.find((entry) => entry.slug === slug);
    expect(size?.overview.price).toBe(price);
    expect(size?.overview.rentalTime).toBe(days);
    expect(size?.overview.includedText).toBe(weight);
    expect(size?.overview.dimensions).toBe(dimensions);
  });

  it.each(dumpsterSizePages)("charges $20 per additional day for $slug", (size) => {
    expect(size.overview.additionalDays).toBe("$20/day");
  });

  it.each(dumpsterSizePages)("charges $37 per 1,000 lbs of extra weight for $slug", (size) => {
    expect(size.overview.extraWeight).toBe("$37/1000 lbs");
  });
});