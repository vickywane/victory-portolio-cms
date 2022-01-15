import {
    CreatePage,
    TextField, DateTimeField,
    TextAreaField, TablePage, TableCell, Field, PageLinkById,
    EditPage
} from "@contember/admin";

export const TalkCreate = (
    <CreatePage
        entity="Talks"
        pageName="talkNew"
        rendererProps={{ title: "Create a new talk" }}
        redirectOnSuccess={(req, id) => ({
            ...req,
            pageName: "talks",
            parameters: { id }
        })}
    >
        <TextField field="title" label="Title" />
        <TextField field="external_link" label="Talk Link" />
        <DateTimeField field="date_created" label="Date Created" />
        <TextAreaField field="summary" label="Summary" />
    </CreatePage>
)

export const TalkList = (
    <TablePage entities="Talks" pageName="talks">
        <TableCell>
            <Field field="title" />
        </TableCell>
        <TableCell>
            <Field field="date_created" />
        </TableCell>
        <TableCell>
            <Field field="external_link" />
        </TableCell>
        <TableCell>
            <Field field="type" />
        </TableCell>
        <TableCell>
            <Field field="summary" />
        </TableCell>
        <TableCell shrunk>
            <PageLinkById to="talk">Edit talk</PageLinkById>
        </TableCell>
    </TablePage>
)

export const EditTalk = (
    <EditPage
        entity="Talks(id = $id)"
        pageName="talk"
    >
        <TextField field="title" label="Title" />
        <TextField field="external_link" label="Publish Link" />
        <TextField field="type" label="Talk type" />
        <DateTimeField field="date_created" label="Date Created" />
        <TextAreaField field="summary" label="Summary" />
    </EditPage>
)
