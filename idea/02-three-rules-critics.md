!SLIDE

# Стандартная мантра

 * Инкапсуляция
 * Наследование
 * Полиморфизм

!SLIDE

# Стандартная мантра

 * Инкапсуляция в **Python**?
 * Наследование
 * Полиморфизм

!SLIDE

	@@@ python
	class A:
		def __init__(self, value):
			self._var = value

	a = A(10)
	a._var = 5
	print a._var # => 5

!SLIDE

	@@@ python
	class A:
		def __init__(self, value):
			self.__var = value

	a = A(10)
	a._A__var = 5
	print a._A__var # => 5

!SLIDE

# Стандартная мантра

 * Инкапсуляция в **Ruby**?
 * Наследование
 * Полиморфизм

!SLIDE

	@@@ ruby
	class A
	  attr_reader :var # getter
	  def initialize(value)
	  	@var = value
	  end
	end

	a = A.new(10)
	a.instance_exec do
	  @var = 5
	end

	puts(a.var) # => 5

!SLIDE

# Стандартная мантра

 * Инкапсуляция
 * Наследование в **Go**?
 * Полиморфизм

!SLIDE

# Стандартная мантра

 * Инкапсуляция
 * Наследование
 * Полиморфизм в... тут вроде всё стабильно