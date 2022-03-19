export default function Markup({ htmlStr }) {
    function createMarkup(htmlStr) {
        return { __html: htmlStr };
    }

    return <div dangerouslySetInnerHTML={createMarkup(htmlStr)} />
}
