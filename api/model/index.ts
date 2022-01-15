import { SchemaDefinition as def } from "@contember/schema-definition";
// export your model definition here

const PostStateEnum = def.createEnum("draft", "published")
const ExperienceTypeEnum = def.createEnum("internship", "FullTime", "Engagements")
const TalkTypeEnum = def.createEnum("podcast", "talk", "interview")

export class Blog {
    title = def.stringColumn().notNull().unique()
    createdAt = def.dateTimeColumn().notNull()
    summary = def.stringColumn().notNull()
    publish_link = def.stringColumn().unique()
    state = def.enumColumn(PostStateEnum).default("draft")
}

export class Experiences {
    company = def.stringColumn().notNull()
    role = def.stringColumn().notNull().unique()
    start_date = def.dateTimeColumn().notNull()
    end_date = def.dateTimeColumn()
    summary = def.stringColumn()
    type = def.enumColumn(ExperienceTypeEnum).default("FullTime")
    external_link = def.stringColumn()
}

export class Talks {
    date_created = def.dateTimeColumn().notNull()
    external_link = def.stringColumn().unique()
    title = def.stringColumn().unique()
    summary = def.stringColumn().unique()
    type = def.enumColumn(TalkTypeEnum).default("talk")
}

export class Certifications {
    date_created = def.dateTimeColumn().notNull()
    title = def.stringColumn().unique()
    verification_id = def.stringColumn().unique()
    external_link = def.stringColumn().unique()
}