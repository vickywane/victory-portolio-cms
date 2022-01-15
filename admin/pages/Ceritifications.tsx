import {
    CreatePage,
    TextField, DateTimeField,
    TablePage, TableCell, Field, PageLinkById,
    EditPage
} from "@contember/admin";

export const CertificationCreate = (
    <CreatePage
        entity="Certifications"
        pageName="certificationNew"
        rendererProps={{ title: "Create a new certification" }}
        redirectOnSuccess={(req, id) => ({
            ...req,
            pageName: "certifications",
            parameters: { id }
        })}
    >
        <TextField field="title" label="Title" />
        <TextField field="external_link" label="Publish Link" />
        <DateTimeField field="date_created" label="Date Created" />
        <TextField field="verification_id" label="Verification ID" />

        <br />
    </CreatePage>
)

export const CertificationsList = (
    <TablePage entities="Certifications" pageName="certifications">
        <TableCell>
            <Field field="title" />
        </TableCell>
        <TableCell>
            <Field field="date_created" />
        </TableCell>
        <TableCell>
            <Field field="verification_id" />
        </TableCell>
        <TableCell shrunk>
            <PageLinkById to="article">Edit Article</PageLinkById>
        </TableCell>
    </TablePage>
)

export const EditCertification = (
    <EditPage
        entity="Certifications(id = $id)"
        pageName="certification"
    >
        <TextField field="title" label="Title" />
        <TextField field="verification_id" label="Verification ID" />
        <TextField field="external_link" label="Certification Link" />
        <DateTimeField field="date_created" label="Date Created" />
    </EditPage>
)
