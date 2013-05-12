<?php

class New_Building_Columns_Another {

	/**
	 * Make changes to the database.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('buildings', function($table) {


            $table->string('lat');
            $table->string('lng');

            $table->string('photo');
            $table->string('category');

        });
	}

	/**
	 * Revert the changes to the database.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}