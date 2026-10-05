
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CatsService } from '../service/cats.service.js';
import { CreateCatDto } from '../dto/create-cat.dto.js';
import { Cat } from '../interface/cat.interface.js';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

}
