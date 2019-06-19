<?php

namespace LGraphQL\Model;

interface IModel {
	public function findById( string $id ) : array;

	public function collection( int $first, string $after ) : array;
}
