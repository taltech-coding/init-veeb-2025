```js
// TODO: Add the correct element ID to make the event text change.
function updateEventTitle(isInProgress) {
    if (isInProgress) {
        document.getElementById("eventText").innerHTML = `${endEventNames[getEventType()]} on jäänud`
        document.title = `Päevi ${endEventNames[getEventType()].toLowerCase().replace("&shy;", "")}`
    } else {
        document.getElementById("eventText").innerHTML = `${startEventNames[getEventType()]} on jäänud`
        document.title = `Päevi ${startEventNames[getEventType()].toLowerCase().replace("&shy;", "")}`
    }
}
```