function editElement(reference, match, replacer) {
    let text = reference.textContent;

    const splitted = text.split(match);
    const result = splitted.join(replacer);

    reference.textContent = result;
}