import { Injectable } from '@nestjs/common';


@Injectable()
export class SeedService {

  populateDB() {
    return 'Seed executed'
  }

}
