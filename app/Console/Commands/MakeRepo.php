<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Console\GeneratorCommand;
use Symfony\Component\Console\Input\InputArgument;

class MakeRepo extends GeneratorCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:repo {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new repository';

    /**
     * Execute the console command.
     *
     * @return int
     */
    // public function handle()
    // {
    //     return Command::SUCCESS;
    // }

    public function getDefaultNamespace($rootNamespace){

        return $rootNamespace. '\Repositories';

    }

    protected function replaceClass($stub, $name) {
     
        $stub = parent::replaceClass($stub, $name);

        return str_replace( 'RepositorieName', $this->argument('name'), $stub);
     
    }

    protected function getStub() {
     
        return app_path(). '/Console/Commands/Stubs/make-repo.stub';
     
    }

    protected function getArguments()
    {
        return [
            ['name', InputArgument::REQUIRED, 'The name of the repository']
        ];
    }
}
