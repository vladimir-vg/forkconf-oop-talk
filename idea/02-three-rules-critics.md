!SLIDE[tmpl=black] center
<div><img src="three-rules.png" /></div>

!SLIDE

# Стандартная мантра

 * Инкапсуляция
 * Наследование
 * Полиморфизм

!SLIDE

	@@@ python
	class A(object):
		def __init__(self, value):
			self.__var = value

	a = A(10)
	a._A__var = 5
	print a._A__var # => 5

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

# Инкапсуляция в ОО не подразумевает блокирование доступа к внутреннему состоянию