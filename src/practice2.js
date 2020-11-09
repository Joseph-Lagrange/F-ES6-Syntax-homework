const inject = (items, sections) => {
    sections.sort((a,b) => {
        return b.index - a.index;
    });
    sections.forEach(s => {
        items.splice(s.index, 0, s.content);
    });
    return items;
};

export { inject };
