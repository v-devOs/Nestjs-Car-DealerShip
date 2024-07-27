import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

  private cars = ['Toyota', 'Honda', 'Jeep']
  
  @Get()
  getAllCars() {
    return this.cars;
  }

  @Get(':id') //Entro a un segmento adicional
  getCarById( @Param('id') id: string ) {
    
    return this.cars[id]
  }
}
