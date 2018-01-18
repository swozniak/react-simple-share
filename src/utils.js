export const DEFAULT_ICON_SIZE = "32px";

export function adjustColorBrightness(hex, brightness) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  brightness = brightness || 0;

  let rgb = "#";
  for (let i = 0; i < 3; i++) {
    let decimalColor = parseInt(hex.substr(i * 2, 2), 16); // convert to decimal
    decimalColor = Math.round(
      Math.min(Math.max(0, decimalColor + decimalColor * brightness), 255)
    ).toString(16); // change brightness
    rgb += ("00" + decimalColor).substr(decimalColor.length);
  }

  return rgb;
}
