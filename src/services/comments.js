function checkComments() {
    if (!localStorage.getItem('testComments')) {
        localStorage.setItem('testComments', JSON.stringify([]));
    }
}

export function getComments() {
    checkComments();
    let comments = JSON.parse(localStorage.getItem('testComments'));
    return comments;
}

export function addComment(text) {
    checkComments();
    let comments = JSON.parse(localStorage.getItem('testComments'));
    let comment = {text, id: comments[0] ? comments[0].id + 1 : 1};
    comments = [comment, ...comments];
    localStorage.setItem('testComments', JSON.stringify(comments));
    return comment;
}

export function deleteComment(id) {
    checkComments();
    let comments = JSON.parse(localStorage.getItem('testComments')).filter(comment => comment.id !== id);
    localStorage.setItem('testComments', JSON.stringify(comments));
    return;
}

export function editComment(id, text) {
    checkComments();
    let comments = JSON.parse(localStorage.getItem('testComments')).map(
        comment => comment.id !== id ? comment : { id, text});
    localStorage.setItem('testComments', JSON.stringify(comments));
    return { id, text };
}