import {
    CreatePage,
    TextField, DateTimeField,
    TextAreaField, TablePage, TableCell, Field, PageLinkById,
    EditPage
} from "@contember/admin";



export const ExperienceCreate = (
    <CreatePage
        entity="Experiences"
        pageName="experienceNew"
        rendererProps={{ title: "Create a new job experience" }}
        redirectOnSuccess={(req, id) => ({
            ...req,
            pageName: "experiences",
            parameters: { id }
        })}
        onPersistError={(e) => {
            console.log("ERROR:", e);
        }}
    >
        <TextField field="company" label="Company" />
        <TextField field="role" label="Role" />
        <DateTimeField field="start_date" label="Start Date" />
        <DateTimeField field="end_date" label="End Date" />
        <TextField field="type" label="Employment Type" />
        <TextField field="external_link" label="External Link" />
        <TextAreaField field="summary" label="Summary" />
        <br />
    </CreatePage>
)

export const ExperienceList = (
    <TablePage entities="Experiences" pageName="experiences">
        <TableCell>
            <Field field="company" />
        </TableCell>
        <TableCell>
            <Field field="role" />
        </TableCell>
        <TableCell>
            <Field field="start_date" />
        </TableCell>
        <TableCell>
            <Field field="end_date" />
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
            <PageLinkById to="experience">Edit Experience</PageLinkById>
        </TableCell>
    </TablePage>
)

export const EditExperience = (
    <EditPage
        entity="experience(id = $id)"
        pageName="experience"
    >
        <TableCell>
            <Field field="company" />
        </TableCell>
        <TableCell>
            <Field field="role" />
        </TableCell>
        <TableCell>
            <Field field="start_date" />
        </TableCell>
        <TableCell>
            <Field field="end_date" />
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
    </EditPage>
)
