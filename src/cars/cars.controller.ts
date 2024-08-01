import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


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
  getCarById( @Param('id', ParseUUIDPipe) id: string ) {
    return this.carsService.findOneById( id )
  }

  @Post()
  createCar( @Body() createCarDto: CreateCarDto ) {
    return this.carsService.create( createCarDto );
  }

  @Patch(':id')
  updateCar( 
    @Body() updateCarDto: UpdateCarDto, 
    @Param('id', ParseUUIDPipe) id : string ) 
  {
    return this.carsService.update( id, updateCarDto );
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseUUIDPipe ) id : string) {
    return this.carsService.delete( id );
  }
}
