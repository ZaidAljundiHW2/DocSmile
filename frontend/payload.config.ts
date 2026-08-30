import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Doctors } from './collections/Doctors'
import { Services } from './collections/Services'
import { ClinicGeneralInformation } from "./collections/Globals";
import { Social } from "./collections/Globals";
import { Legal } from "./collections/Globals";
import { About } from "./collections/Globals";
import { PatientInformation } from "./collections/Globals";
import { Testimonials } from "./collections/Testimonials";
import { ContactQueries } from "./collections/ContactQueries";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Doctors, Services, Testimonials, ContactQueries],
  globals: [ClinicGeneralInformation, Social, Legal, About, PatientInformation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  plugins: [],
});
