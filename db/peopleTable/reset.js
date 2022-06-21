import { createProfilesTable } from './create.js'
import { populateProfilesTable } from './populate.js'
import { dropProfilesTable } from './drop.js'

export async function resetProfilesTable() {
    
      await dropProfilesTable();
      await createProfilesTable();
      await populateProfilesTable();
  }

  resetProfilesTable();