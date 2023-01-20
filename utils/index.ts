export const urlFromJson = function(json) {
    let url = "https://scrimba.com"
    if (json.course) {
      url += `/learn/${json.course}/`
      url += json.blurb ? `${json.blurb}-${json.id}` : `${json.id}`
    } else {
      url += `/scrim/${json.id}`
    }
    url += "?embed=blocks,mini-header"
    return url;
}
 