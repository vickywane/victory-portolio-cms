import {
    CreatePage,
    TextField, DateTimeField,
    TextAreaField, TablePage, TableCell, Field, PageLinkById,
    EditPage
} from "@contember/admin";

export const BlogCreate = (
    <CreatePage
        entity="Blog"
        pageName="articleNew"
        rendererProps={{ title: "Create a new article" }}
        redirectOnSuccess={(req, id) => ({
            ...req,
            pageName: "articles",
            parameters: { id }
        })}
    >
        <TextField field="title" label="Title" />
        <TextField field="publish_link" label="Publish Link" />
        <TextField field="state" label="Article State" />
        <DateTimeField field="createdAt" label="Created" />
        <TextAreaField field="summary" label="Summary" />
    </CreatePage>
)

export const BlogList = (
    <TablePage entities="Blog" pageName="articles">
        <TableCell>
            <Field field="title" />
        </TableCell>
        <TableCell>
            <Field field="createdAt" />
        </TableCell>
        <TableCell>
            <Field field="publish_link" />
        </TableCell>
        <TableCell>
            <Field field="state" />
        </TableCell>
        <TableCell>
            <Field field="summary" />
        </TableCell>
        <TableCell shrunk>
            <PageLinkById to="article">Edit Article</PageLinkById>
        </TableCell>
    </TablePage>
)

export const EditBlog = (
    <EditPage
        entity="Blog(id = $id)"
        pageName="article"
    >
        <TextField field="title" label="Title" />
        <TextField field="publish_link" label="Publish Link" />
        <TextField field="state" label="Article State" />
        <DateTimeField field="createdAt" label="Created" />
        <TextAreaField field="summary" label="Summary" />
    </EditPage>
)
