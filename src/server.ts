import app from './app';
import config from './app/config';

import mongoose from 'mongoose';
import seedSuperAdmin from './app/DB';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    seedSuperAdmin();
    app.listen(config.port, () => {
      console.log(`Server is Running with port of ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
