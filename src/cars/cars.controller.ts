import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService,
  ){}
  
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id') //Entro a un segmento adicional
  getCarById( @Param('id') id: string ) {
    return this.carsService.findOneById( +id )
  }
}
